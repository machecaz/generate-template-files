const filename = require('file-name');
const insertLine = require('insert-line');

const items = [
  {
    option: 'Vue File',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/vue/__file__.vue',
    },
    stringReplacers: ['__type__', '__file__'],
    output: {
      path: (replacers, configItem) => {
        function search(key, replacers){
          let i = 0
          let l = replacers.length
          for (i; i < l; i++) {
            if (replacers[i].slot === key) {
              return replacers[i];
            }
          }
        }

        const type = search('__type__(kebabCase)', replacers)

        if (type.slotValue === 'page') {
          return `./src/pages/__file__.vue`
        } else if (['atom', 'component', 'organism'].includes(type.slotValue)) {
          return `./src/components/__type__(kebabCase)s/__file__.vue`
        }

        throw new Error('Type specified is not valid.')
      },
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
];

/*
 * NOTE: there is many ways you can do this. This is just an example on how you might approach it.
 */
async function importVuexStore(results) {
    const files = results.output.files;

    const fullPaths = files
        .map((folderPath) => folderPath.replace('src/', '')) // remove 'src' from path
        .map((path) => `import ${filename(path)} from '${path}'`) // create import statement
        .join('\n'); // put all imports on there own line

    try {
        await insertLine('src/import-test.ts').append(fullPaths);
    } catch (error) {
        console.log(``, error);
    }
}

exports.items = items;
