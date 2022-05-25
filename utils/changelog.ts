import { VersionLog } from "../interfaces";

export class ChangelogUtils {
  public logDiscord(log: VersionLog) {
    return `
@Updates
\`\`\`
${log.v} ${log.date}

${log.notes.map(line => `- ${line}`).join('\n')}
\`\`\``.trim();
  }

  public logSteam(log: VersionLog) {
    return `
You can find the full changelog at [url=https://toughlovearena.com?changelog#${log.v}]toughlovearena.com?changelog[/url]

[list]
${log.notes.map(line => `[*] ${line}`).join('\n')}
[/list]
`.trim();
  }

  public logTwitter(log: VersionLog) {
    return `
${log.v}

${log.notes.map(line => `- ${line}`).join('\n')}

Log: https://toughlovearena.com?changelog#${log.v}
`.trim();
  }

  public linkTwitter(text: string) {
    return `http://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  }
}
