export const stringFormatter = {
  toCapitalize: (sentece: string) => {
    let firstLetter = sentece.charAt(0).toUpperCase();
    let restOfSentence = sentece.slice(1, sentece.length);

    let newSentece = `${firstLetter}${restOfSentence}`;

    return newSentece;
  },
};
