import { VersionLog } from "../interfaces";

export class ChangelogUtils {
  linkTwitter = (text: string) => `http://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  linkDiscord = () => `https://discord.com/channels/794637891808002050/794718673843650590`;

  logDiscord = (log: VersionLog) => `
@Updates
${"```"}
${log.v} ${log.date}

${log.notes.map(line => `- ${line}`).join('\n')}
${"```"}
`.trim();

  logSteam = (log: VersionLog) => `
You can find the full changelog at [url=https://toughlovearena.com?changelog#${log.v}]toughlovearena.com?changelog[/url]

[list]
${log.notes.map(line => `[*] ${line}`).join('\n')}
[/list]
`.trim();

  logTwitter = (log: VersionLog) => `
${log.v}

${log.notes.map(line => `- ${line}`).join('\n')}

Log: https://toughlovearena.com?changelog#${log.v}
`.trim();
}
