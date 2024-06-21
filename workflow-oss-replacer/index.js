import clipboardy from 'clipboardy'
import alfy from 'alfy'

let content = clipboardy.readSync();
if (content.startsWith('oss://img-supermonkey/')) {
  let newContent = content.replace('oss://img-supermonkey/', 'https://img.supermonkey.com.cn/');
  alfy.output([
    {
      title: newContent,
      arg: newContent,
    },
  ]);

  clipboardy.writeSync(newContent);
} else {
  alfy.output([
    {
      title: '未找到oss链接' + content,
      arg: content,
    },
  ]);
}