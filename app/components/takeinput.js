export default function TakeInput({ password, setPassword, setBits }) {
  // Function to calculate password entropy
  function calculatePasswordEntropy(password) {
    setPassword(password); // Update the password state
    if (!password || password.length === 0) {
      setBits(0);
      return;
    }

    let charsetSize = 0;

    // Check for character types
    if (/[a-z]/.test(password)) charsetSize += 26; // Lowercase
    if (/[A-Z]/.test(password)) charsetSize += 26; // Uppercase
    if (/[0-9]/.test(password)) charsetSize += 10; // Digits
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32; // Common symbols

    // Calculate entropy: log2(charsetSize^length)
    const entropy = password.length * Math.log2(charsetSize);
    setBits(entropy.toFixed(2)); // Update bits state with formatted value
  }

  // Function to check password rules
  const checkPassword = (password) => {
    return {
      hasLower: /[a-z]/.test(password),
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasShiftSymbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      totalChars: password.length,
    };
  };

  const rules = checkPassword(password);

  return (
    <div className="w-1/2 pr-6 border-r">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Type a Password
      </h1>
      <p className="text-gray-500 mb-6 text-sm">Enter a password example</p>
      <input
        value={password}
        onChange={(e) => calculatePasswordEntropy(e.target.value)}
        type="text"
        placeholder="e.g M3m3L0rd!"
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <p className="text-xs text-gray-400 mt-2">
        This will not be sent anywhere.
      </p>

      {/* Additional Info */}
      <div className="mt-6 text-sm">
        <p className={rules.hasLower ? "text-green-600" : "text-gray-600"}>
          -- Lowercase Letters 26 chars
        </p>
        <p className={rules.hasUpper ? "text-green-600" : "text-gray-600"}>
          -- Uppercase Letters 26 chars
        </p>
        <p className={rules.hasNumber ? "text-green-600" : "text-gray-600"}>
          -- Numbers 10 chars
        </p>
        <p className={rules.hasShiftSymbol ? "text-green-600" : "text-gray-600"}>
          -- Shift + [0-9] Symbols 10 chars
        </p>
        
        <p className="mt-2 font-semibold">
          Total {rules.totalChars} chars
        </p>
      </div>
    </div>
  );
}
