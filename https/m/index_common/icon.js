"use strict";

/*
	Extension & Icon : css보다 js가 유연하고 간단하게 icon 연결. https://en.wikipedia.org/wiki/List_of_file_formats , http://fileinfo.com/
*/
var aIconList = [ // 표기 순서대로 icon sort 되므로 유의
['_read.png', ['md']],
['_config.png', ['conf', 'cnf', 'cfg', 'mak', 'make', 'makefile', 'diff', 'patch', 'yml', 'ini', 'inf']],
['_file.png', ['bak', 'ttf', 'fon', 'otf', 'woff', '3ds', 'tmp', 'temp', 'part', 'dif']],

['gif.png', ['gif']],
['jpg.png', ['jpg', 'jpeg']],
['png.png', ['png']],
['_image.png', ['tif', 'tiff', 'bmp', 'dwg', 'ico', 'tga', 'svg', 'wmf', 'emf']],

['_playlist.png', ['m3u', 'asx', 'cue', 'pls']],
['ogg.png', ['ogg', 'ogm', 'ogv']], // Ogg Vorbis audio & video
['mp3.png', ['mp3']],
['wav.png', ['wav', 'wma']],
['aiff.png', ['aif', 'aiff']],
['ram.png', ['ram']],
['_audio.png', ['ape', 'fla', 'flac', 'mid', 'midi', 'mod', 'au', 'vqf', 'vox', 'voc']],
['mp4.png', ['mp4']],
['mkv.png', ['mkv']],
['wmv.png', ['avi', 'wmv', 'asf']],
['mpg.png', ['mpg', 'mpeg', 'mpe']],
['mov.png', ['mov']],
['_video.png', ['divx', 'xvid', 'rm', 'rmvb', 'ts', 'tp', 'vob', 'qt']],
['_sbt.png', ['smi', 'srt']],

['htm.png', ['htm', 'html', 'mht', 'mhtml', 'shtml', 'stm']],
['css.png', ['css']],
['js.png', ['js', 'json']],
['xml.png', ['xml', 'xhtml', 'xht']],
['_network.png', ['cgi', 'jsp', 'xpi']],

['gz.png', ['tar', 'gz', 'tgz']],
['zip.png', ['zip']],
['rar.png', ['rar']],
['7z.png', ['7z']],
['_archive.png', ['bz2', 'egg', 'alz', 'gho', 'ghs', 'lha', 'lzh', 'z', 'cab', 'ace', 'arc']],

['c.png', ['c']],
['h.png', ['h']],
['cpp.png', ['cpp']],
['hpp.png', ['hpp']],
['php.png', ['php']],
['py.png', ['py']],
['pl.png', ['pl', 'pm']],
['rb.png', ['rb']],
['lua.png', ['lua']],
['tex.png', ['tex']],
['sql.png', ['sql']],
['cs.png', ['cs']],
['m.png', ['m']],
['mm.png', ['mm']],
['_script.png', ['sh', 'bsh', 'bash', 'bat', 'cmd', 'awk']],

['log.png', ['log']],
['pgp.png', ['pgp']],
['sig.png', ['sig']],
['_text.png', ['txt', 'asc', 'nfo']],
['enc.png', ['enc']],

['rtf.png', ['rtf']],
['csv.png', ['csv']],
['ps.png', ['ps']],
['vcf.png', ['vcf']],
['eml.png', ['eml']],
['odc.png', ['odc']],
['odf.png', ['odf']],
['odg.png', ['odg', 'odi', 'sxd']],
['odp.png', ['odp', 'sxi']],
['ods.png', ['ods', 'sxc']],
['odt.png', ['odt', 'sxw']],
['doc.png', ['doc', 'dot']],
['xls.png', ['xls', 'xlsb', 'xlsm', 'xlk', 'xlt', 'xltm']],
['ppt.png', ['ppt']],
['vsd.png', ['vsd', 'vsdx']],

['swf.png', ['swf', 'flv']],
['psd.png', ['psd']],
['pdf.png', ['pdf']],
['ai.png', ['ai']],
['_adobe.png', ['cfc', 'cfm', 'as']],
['_java.png', ['class', 'java', 'jar']],

['deb.png', ['deb']],
['rpm.png', ['rpm']],
['chm.png', ['chm']],
['hlp.png', ['hlp']],
['iso.png', ['iso', 'nrg', 'img', 'dmg', 'cdi', 'cif']],
['_bin.png', ['bin', 'exe', 'dat', 'raw', 'vdi', 'vbox', 'vhd', 'vmdk', 'dsk', 'lib', 'o', 'obj', 'a']],

['_unknown.png', []],
['_error.png', []]
];
var sIconFolder = '_folder.png', sCommonFolderName = 'index_common/'; // _folder.png가 오직 folder 만을 위해 사용됨
var aIconNameChk = [
	[0, ['install', 'read', 'chang', 'copy', 'new', 'problem', 'error', 'errata', 'licens', 'acknowledg', 'faq', 'contribut', 'todo']],
	[1, ['make', 'config']]
];

function findIcon(sName, sExt) {
	var i, j;

	if(sExt != '') {
		sExt = sExt.slice(1);
		for(i=0; i < (aIconList.length-2); i++) {
			if(aIconList[i][1].indexOf(sExt) != -1)
				return i;
		}
	}
	sName = sName.toLowerCase();
	for(i=0; i<aIconNameChk.length; i++) {
		for(j=0; j<aIconNameChk[i][1].length; j++) {
			if(sName.indexOf(aIconNameChk[i][1][j]) != -1)
				return aIconNameChk[i][0];
		}
	}
	if(sName.charAt(0) == '.')
		return 1;
	if(sExt == '')
		return 2;
	return aIconList.length - 2;
}
