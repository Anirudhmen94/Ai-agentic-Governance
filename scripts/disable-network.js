import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const npmrcPath = path.join(repoRoot, ".npmrc");
const offlineConfig = "offline=true\n";

if (!fs.existsSync(npmrcPath)) {
  fs.writeFileSync(npmrcPath, offlineConfig, "utf8");
} else {
  const current = fs.readFileSync(npmrcPath, "utf8");
  if (!current.includes("offline=true")) {
    fs.appendFileSync(npmrcPath, offlineConfig, "utf8");
  }
}
