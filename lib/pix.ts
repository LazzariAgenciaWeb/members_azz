
function crc16ccitt(str: string): string {
    let crc = 0xffff;
    const strlen = str.length;

    for (let c = 0; c < strlen; c++) {
        let x = (crc >> 8) ^ str.charCodeAt(c);
        x ^= x >> 4;
        crc = ((crc << 8) ^ (x << 12) ^ (x << 5) ^ x) & 0xffff;
    }

    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function formatField(id: string, value: string): string {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
}

export function generatePixPayload(
    key: string,
    amount: number | undefined,
    name: string,
    city: string,
    txid: string = '***',
    description?: string
): string {
    const merchantAccountInfo = [
        formatField('00', 'BR.GOV.BCB.PIX'),
        formatField('01', key),
        description ? formatField('02', description) : ''
    ].join('');

    const amountStr = amount ? amount.toFixed(2) : '0.00';

    const payload = [
        formatField('00', '01'), // Payload Format Indicator
        formatField('26', merchantAccountInfo),
        formatField('52', '0000'), // Merchant Category Code
        formatField('53', '986'), // Transaction Currency (BRL)
        amount ? formatField('54', amountStr) : '', // Transaction Amount
        formatField('58', 'BR'), // Country Code
        formatField('59', name), // Merchant Name
        formatField('60', city), // Merchant City
        formatField('62', formatField('05', txid)), // Additional Data Field Template
        '6304' // CRC16 ID + Length
    ].join('');

    const crc = crc16ccitt(payload);
    return `${payload}${crc}`;
}
