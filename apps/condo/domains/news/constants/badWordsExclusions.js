const BAD_WORDS_EXCLUSIONS = [
    'дебиторск*',
    'ипу',
    '*канал*',
    'муниципал*',
    'потребител*',
    'чебоксар*',
    'учеб*',
]

const BAD_WORDS_EXCLUSIONS_CONFIG = {
    id: 'exclusions',
    words: BAD_WORDS_EXCLUSIONS,
    lookalike: {},
}

module.exports = {
    BAD_WORDS_EXCLUSIONS_CONFIG,
}
