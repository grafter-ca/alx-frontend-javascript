// Define the MajorCredits interface with branding
interface MajorCredits {
  credits: number;
  brand: 'major'; // unique brand property
}

// Define the MinorCredits interface with branding
interface MinorCredits {
  credits: number;
  brand: 'minor'; // unique brand property
}

// Function to sum two MajorCredits and return a MajorCredits value
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum two MinorCredits and return a MinorCredits value
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Example usage (optional):
const major1: MajorCredits = { credits: 10, brand: 'major' };
const major2: MajorCredits = { credits: 15, brand: 'major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log(totalMajor); // { credits: 25, brand: 'major' }

const minor1: MinorCredits = { credits: 5, brand: 'minor' };
const minor2: MinorCredits = { credits: 8, brand: 'minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(totalMinor); // { credits: 13, brand: 'minor' }
