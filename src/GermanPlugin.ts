import { join } from 'path';
// tslint:disable-next-line:no-implicit-dependencies
import { Client, IPlugin, Lang, Logger, Plugin } from 'yamdbf';

export class GermanPlugin extends Plugin implements IPlugin
{
	public readonly name: string = 'lang-german';

	private readonly _client: Client;

	public constructor(client: Client)
	{
		super();

		this._client = client;
	}

	public async init(): Promise<void>
	{
		const dir: string = join(__dirname, 'de_de');
		Logger.instance().debug(this.name, `Loading language files from "${dir}"`);

		Lang.setMetaValue('de_de', 'name', 'Deutsch');
		Lang.loadLocalizationsFrom(dir);
		Lang.loadCommandLocalizationsFrom(dir);
		Lang.loadGroupLocalizationsFrom(dir);
	}
}
