// MIDI note number	Key:{organKey:number (,pianoKey:Organ)	Key number (Keys)	Sheet names (English)	Sheet names (German)	Frequency (Equal tuning at 440 Hz)
// top of MIDI tuning range	 	 	G#9/Ab9	gis’’’’’’/ges’’’’’’	13289.75
const notes = {
    127: {name: 'G9', otherName: 'g’’’’’’', freq: 2543.85},
    126: {organKey: null, pianoKey: null, name: 'F#9/Gb9', otherName: 'fis’’’’’’/ges’’’’’’', freq: 1839.82},
    125: {organKey: null, pianoKey: null, name: 'F9', otherName: 'f’’’’’’', freq: 1175.30},
    124: {organKey: null, pianoKey: null, name: 'E9', otherName: 'e’’’’’’', freq: 10548.08},
    123: {organKey: null, pianoKey: null, name: 'D#9/Eb9', otherName: 'dis’’’’’’/es’’’’’’', freq: 9956.06},
    122: {organKey: null, pianoKey: null, name: 'D9', otherName: 'd’’’’’’', freq: 9397.27},
    121: {organKey: null, pianoKey: null, name: 'C#9/Db9', otherName: 'cis’’’’’’/des’’’’’’', freq: 8869.84},
    120: {organKey: null, pianoKey: null, name: 'C9', otherName: 'c’’’’’’', freq: 8372.02},
    119: {organKey: null, pianoKey: null, name: 'B8', otherName: 'h’’’’’', freq: 7902.13},
    118: {organKey: null, pianoKey: null, name: 'A#8/Bb8', otherName: 'ais’’’’’/b’’’’’', freq: 7458.62},
    117: {organKey: null, pianoKey: null, name: 'A8', otherName: 'a’’’’’', freq: 7040.00},
    116: {organKey: null, pianoKey: null, name: 'G#8/Ab8', otherName: 'gis’’’’’/ges’’’’’', freq: 6644.88},
    115: {organKey: null, pianoKey: null, name: 'G8', otherName: 'g’’’’’', freq: 6271.93},
    114: {organKey: null, pianoKey: null, name: 'F#8/Gb8', otherName: 'fis’’’’’/ges’’’’’', freq: 5919.91},
    113: {organKey: null, pianoKey: null, name: 'F8', otherName: 'f’’’’’', freq: 5587.65},
    112: {organKey: null, pianoKey: null, name: 'E8', otherName: 'e’’’’’', freq: 5274.04},
    111: {organKey: null, pianoKey: null, name: 'D#8/Eb8', otherName: 'dis’’’’’/es’’’’’', freq: 4978.03},
    110: {organKey: null, pianoKey: null, name: 'D8', otherName: 'd’’’’’', freq: 4698.64},
    109: {organKey: null, pianoKey: null, name: 'C#8/Db8', otherName: 'cis’’’’’/des’’’’’', freq: 4434.92},
    108: {organKey: null, pianoKey: 88, name: 'C8', otherName: 'c’’’’’', freq: 4186.01},
    107: {organKey: null, pianoKey: 87, name: 'B7', otherName: 'h’’’’', freq: 3951.07},
    106: {organKey: null, pianoKey: 86, name: 'A#7/Bb7', otherName: 'ais’’’’/b’’’’', freq: 3729.31},
    105: {organKey: null, pianoKey: 85, name: 'A7', otherName: 'a’’’’', freq: 3520.00},
    104: {organKey: null, pianoKey: 84, name: 'G#7/Ab7', otherName: 'gis’’’’/ges’’’’', freq: 3322.44},
    103: {organKey: null, pianoKey: 83, name: 'G7', otherName: 'g’’’’', freq: 3135.96},
    102: {organKey: null, pianoKey: 82, name: 'F#7/Gb7', otherName: 'fis’’’’/ges’’’’', freq: 2959.96},
    101: {organKey: null, pianoKey: 81, name: 'F7', otherName: 'f’’’’', freq: 2793.83},
    100: {organKey: null, pianoKey: 80, name: 'E7', otherName: 'e’’’’', freq: 2637.02},
    99: {organKey: null, pianoKey: 79, name: 'D#7/Eb7', otherName: 'dis’’’’/es’’’’', freq: 2489.02},
    98: {organKey: null, pianoKey: 78, name: 'D7', otherName: 'd’’’’', freq: 2349.32},
    97: {organKey: null, pianoKey: 77, name: 'C#7/Db7', otherName: 'cis’’’’/des’’’’', freq: 2217.46},
    96: {organKey: 61, pianoKey: 76, name: 'C7', otherName: 'c’’’’', freq: 2093.00},
    95: {organKey: 60, pianoKey: 75, name: 'B6', otherName: 'h’’’', freq: 1975.53},
    94: {organKey: 59, pianoKey: 74, name: 'A#6/Bb6', otherName: 'ais’’’/b’’’', freq: 1864.66},
    93: {organKey: 58, pianoKey: 73, name: 'A6', otherName: 'a’’’', freq: 1760.00},
    92: {organKey: 57, pianoKey: 72, name: 'G#6/Ab6', otherName: 'gis’’’/as’’’', freq: 1661.22},
    91: {organKey: 56, pianoKey: 71, name: 'G6', otherName: 'g’’’', freq: 1567.98},
    90: {organKey: 55, pianoKey: 70, name: 'F#6/Gb6', otherName: 'fis’’’/ges’’’', freq: 1479.98},
    89: {organKey: 54, pianoKey: 69, name: 'F6', otherName: 'f’’’', freq: 1396.91},
    88: {organKey: 53, pianoKey: 68, name: 'E6', otherName: 'e’’’', freq: 1318.51},
    87: {organKey: 52, pianoKey: 67, name: 'D#6/Eb6', otherName: 'dis’’’/es’’’', freq: 1244.51},
    86: {organKey: 51, pianoKey: 66, name: 'D6', otherName: 'd’’’', freq: 1174.66},
    85: {organKey: 50, pianoKey: 65, name: 'C#6/Db6', otherName: 'cis’’’/des’’’', freq: 1108.73},
    84: {organKey: 49, pianoKey: 64, name: 'C6', otherName: 'c’’’', freq: 1046.50},
    83: {organKey: 48, pianoKey: 63, name: 'B5', otherName: 'h’’', freq: 987.77},
    82: {organKey: 47, pianoKey: 62, name: 'A#5/Bb5', otherName: 'ais’’/b’’', freq: 932.33},
    81: {organKey: 46, pianoKey: 61, name: 'A5', otherName: 'a’’', freq: 880.00},
    80: {organKey: 45, pianoKey: 60, name: 'G#5/Ab5', otherName: 'gis’’/as’’', freq: 830.61},
    79: {organKey: 44, pianoKey: 59, name: 'G5', otherName: 'g’’', freq: 783.99},
    78: {organKey: 43, pianoKey: 58, name: 'F#5/Gb5', otherName: 'fis’’/ges’’', freq: 739.99},
    77: {organKey: 42, pianoKey: 57, name: 'F5', otherName: 'f’’', freq: 698.46},
    76: {organKey: 41, pianoKey: 56, name: 'E5', otherName: 'e’’', freq: 659.26},
    75: {organKey: 40, pianoKey: 55, name: 'D#5/Eb5', otherName: '	dis’’/es’’', freq: 622.25},
    74: {organKey: 39, pianoKey: 54, name: 'D5', otherName: 'd’’', freq: 587.33},
    73: {organKey: 38, pianoKey: 53, name: 'C#5/Db5', otherName: 'cis’’/des’’', freq: 554.37},
    72: {organKey: 37, pianoKey: 52, name: 'C5', otherName: 'c’’', freq: 523.25},
    71: {organKey: 36, pianoKey: 51, name: 'B4', otherName: 'h’', freq: 493.88},
    70: {organKey: 35, pianoKey: 50, name: 'A#4/Bb4', otherName: 'ais’/b’', freq: 466.16},
    69: {organKey: 34, pianoKey: 49, name: 'A4', otherName: 'a’', freq: 440.00},
    68: {organKey: 33, pianoKey: 48, name: 'G#4/Ab4', otherName: 'gis’/as’', freq: 415.30},
    67: {organKey: 32, pianoKey: 47, name: 'G4', otherName: 'g’', freq: 392.00},
    66: {organKey: 31, pianoKey: 46, name: 'F#4/Gb4', otherName: 'fis’/ges’', freq: 369.99},
    65: {organKey: 30, pianoKey: 45, name: 'F4', otherName: 'f’', freq: 349.23},
    64: {organKey: 29, pianoKey: 44, name: 'E4', otherName: 'e’', freq: 329.63},
    63: {organKey: 28, pianoKey: 43, name: 'D#4/Eb4', otherName: 'dis’/es’', freq: 311.13},
    62: {organKey: 27, pianoKey: 42, name: 'D4', otherName: 'd’', freq: 293.66},
    61: {organKey: 26, pianoKey: 41, name: 'C#4/Db4', otherName: 'cis’/des’', freq: 277.18},
    60: {organKey: 25, pianoKey: 40, name: 'C4', otherName: 'c’', freq: 261.63},
    59: {organKey: 24, pianoKey: 39, name: 'B3', otherName: 'h', freq: 246.94},
    58: {organKey: 23, pianoKey: 38, name: 'A#3/Bb3', otherName: 'ais/b', freq: 233.08},
    57: {organKey: 22, pianoKey: 37, name: 'A3	', otherName: 'a', freq: 220.00},
    56: {organKey: 21, pianoKey: 36, name: 'G#3/Ab3', otherName: 'gis/as', freq: 207.65},
    55: {organKey: 20, pianoKey: 35, name: 'G3	', otherName: 'g', freq: 196.00},
    54: {organKey: 19, pianoKey: 34, name: 'F#3/Gb3', otherName: 'fis/ges', freq: 185.00},
    53: {organKey: 18, pianoKey: 33, name: 'F3', otherName: 'f', freq: 174.61},
    52: {organKey: 17, pianoKey: 32, name: 'E3', otherName: 'e', freq: 164.81},
    51: {organKey: 16, pianoKey: 31, name: 'D#3/Eb3', otherName: 'dis/es', freq: 155.56},
    50: {organKey: 15, pianoKey: 30, name: 'D3', otherName: 'd', freq: 146.83},
    49: {organKey: 14, pianoKey: 29, name: 'C#3/Db3', otherName: 'cis/des', freq: 138.59},
    48: {organKey: 13, pianoKey: 28, name: 'C3', otherName: 'c', freq: 130.81},
    47: {organKey: 12, pianoKey: 27, name: 'B2', otherName: 'H', freq: 123.47},
    46: {organKey: 11, pianoKey: 26, name: 'A#2/Bb2', otherName: 'Ais/B', freq: 116.54},
    45: {organKey: 10, pianoKey: 25, name: 'A2', otherName: 'A', freq: 110.00},
    44: {organKey: 9, pianoKey: 24, name: 'G#2/Ab2', otherName: 'Gis/As', freq: 103.83},
    43: {organKey: 8, pianoKey: 23, name: 'G2', otherName: 'G', freq: 98.00},
    42: {organKey: 7, pianoKey: 22, name: 'F#2/Gb2', otherName: 'Fis/Ges', freq: 92.50},
    41: {organKey: 6, pianoKey: 21, name: 'F2', otherName: 'F', freq: 87.31},
    40: {organKey: 5, pianoKey: 20, name: 'E2', otherName: 'E', freq: 82.41},
    39: {organKey: 4, pianoKey: 19, name: 'D#2/Eb2', otherName: 'Dis/Es', freq: 77.78},
    38: {organKey: 3, pianoKey: 18, name: 'D2', otherName: 'D', freq: 73.42},
    37: {organKey: 2, pianoKey: 17, name: 'C#2/Db2', otherName: 'Cis/Des', freq: 69.30},
    36: {organKey: 1, pianoKey: 16, name: 'C2', otherName: 'C', freq: 65.41},
    35: {pianoKey: 15, name: 'B1', otherName: 'H1', freq: 61.74},
    34: {organKey: null, pianoKey: 14, name: 'A#1/Bb1', otherName: 'Ais1/b1', freq: 58.27},
    33: {organKey: null, pianoKey: 13, name: 'A1', otherName: 'A1', freq: 55.00},
    32: {organKey: null, pianoKey: 12, name: 'G#1/Ab1', otherName: 'Gis1/As1', freq: 51.91},
    31: {organKey: null, pianoKey: 11, name: 'G1', otherName: 'G1', freq: 49.00},
    30: {organKey: null, pianoKey: 10, name: 'F#1/Gb1', otherName: 'Fis1/Ges1', freq: 46.25},
    29: {organKey: null, pianoKey: 9, name: 'F1', otherName: 'F1', freq: 43.65},
    28: {organKey: null, pianoKey: 8, name: 'E1', otherName: 'E1', freq: 41.20},
    27: {organKey: null, pianoKey: 7, name: 'D#1/Eb1', otherName: 'Dis1/Es1', freq: 38.89},
    26: {organKey: null, pianoKey: 6, name: 'D1', otherName: 'D1', freq: 36.71},
    25: {organKey: null, pianoKey: 5, name: 'C#1/Db1', otherName: 'Cis1/Des1', freq: 34.65},
    24: {organKey: null, pianoKey: 4, name: 'C1', otherName: 'C1', freq: 32.70},
    23: {organKey: null, pianoKey: 3, name: 'B0', otherName: 'H2', freq: 30.87},
    22: {organKey: null, pianoKey: 2, name: 'A#0/Bb0', otherName: 'Ais2/B2', freq: 29.14},
    21: {organKey: null, pianoKey: 1, name: 'A0', otherName: 'A2', freq: 27.50},
    20: {organKey: null, pianoKey: null, freq: 25.96},
    19: {organKey: null, pianoKey: null, freq: 24.50},
    18: {organKey: null, pianoKey: null, freq: 23.12},
    17: {organKey: null, pianoKey: null, freq: 21.83},
    16: {organKey: null, pianoKey: null, freq: 20.60},
    15: {organKey: null, pianoKey: null, freq: 19.45},
    14: {organKey: null, pianoKey: null, freq: 18.35},
    13: {organKey: null, pianoKey: null, freq: 17.32},
    12: {organKey: null, pianoKey: null, freq: 16.35},
    11: {organKey: null, pianoKey: null, freq: 15.43},
    10: {organKey: null, pianoKey: null, freq: 14.57},
    9: {organKey: null, pianoKey: null, freq: 13.75},
    8: {organKey: null, pianoKey: null, freq: 12.98},
    7: {organKey: null, pianoKey: null, freq: 12.25},
    6: {organKey: null, pianoKey: null, freq: 11.56},
    5: {organKey: null, pianoKey: null, freq: 10.91},
    4: {organKey: null, pianoKey: null, freq: 10.30},
    3: {organKey: null, pianoKey: null, freq: 9.72},
    2: {organKey: null, pianoKey: null, freq: 9.18},
    1: {organKey: null, pianoKey: null, freq: 8.66},
    0: {organKey: null, pianoKey: null, freq: 8.18},
};
const
    C0=12,
    C1 = 24,
    C2 = 36,
    C3 = 48,
    C4 = 60,
    C5 = 72,
    C6 = 84,
    C7 = 96,
    C8 = 108;

const octave = ['c', 'cis', 'd', 'dis', 'e', 'f', 'fis', 'g', 'gis', 'a', 'ais', 'b'];
const blackKeys= [1,3,6,8,10];
const noteModifiers={
    sharp:'sharp',
    flat:'flat'
};
const noteLengths={
    quarter:1/4
};
export {C0,C1, C2, C3, C4, C5, C6,C7,C8, notes, octave,blackKeys,noteModifiers};

