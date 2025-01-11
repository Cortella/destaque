export const REGEX = {
    ONLY_LETTERS: /^[A-Za-z]+$/,
    ONLY_LETTERS_AND_GRAFICH_SINALS: /^[A-Za-záàâãäåçéèêëíìîïóòôõöúùûüñÁÀÂÃÄÅÇÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÑ]+$/,
    DATE_FORMAT_YYYY_MM_DD:  /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    IS_UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
}