export default function compilePath(path: string) {
  // --- TODO ---
  // const keys: string[] = [];

  path = path.replace(/:(\w+)/g, (_, key) => {
    // keys.push(key);
    return "([^\\/]+)";
  });

  const source = `^(${path})`;

  const regex = new RegExp(source, "i");

  // console.log(regex);
  return { regex };
}
