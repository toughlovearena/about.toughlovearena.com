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
You can find the full changelog at [url=https://about.toughlovearena.com/log#${log.v}]about.toughlovearena.com/log[/url]

[list]
${log.notes.map(line => `[*] ${line}`).join('\n')}
[/list]
`.trim();

  logTwitter = (log: VersionLog) => `
${log.v}

${log.notes.map(line => `- ${line}`).join('\n')}

Log: https://about.toughlovearena.com/log#${log.v}
`.trim();
}
