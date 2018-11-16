'use babel';

const majorVersions = {
	'1': {
		icons: require('./data/v1/icons'),
		snippets: require('./data/v1/snippets'),
		label: 'v1.2.28',
		className: 'caomei-v1',
		stylePrefixMap: {
			'': ''
		},
		iconMoreRoot: 'http://chuangzaoshi.com/icon/'
	},
	'2': {
		icons: require('./data/v2/icons'),
		snippets: require('./data/v2/snippets'),
		label: 'v2.0.0',
		className: 'caomei-v2',
		stylePrefixMap: {
			'': '',
		},
		iconMoreRoot: 'http://chuangzaoshi.com/icon/'
	}
};

class VersionHelper {
    getCurrentVersionInfo() {
        let version = atom.config.get('atom-autocomplete-caomei.version');
		let majorVersion = version.split('.', 1)[0];
        return majorVersions[majorVersion];
    }
}
export default new VersionHelper();
