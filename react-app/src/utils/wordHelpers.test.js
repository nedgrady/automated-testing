import { removeVowels } from './wordHelpers'

// TODO 1 - add some more test cases
test('removing vowels from a string', () => {
    const seedWord = 'some string'

    const expectedStringWithNoVowels = 'sm strng'

    const receivedString = removeVowels(seedWord)

    expect(receivedString).toEqual(expectedStringWithNoVowels)
    
});
  