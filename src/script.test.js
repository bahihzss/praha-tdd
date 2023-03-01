const { spawnSync } = require('child_process');
const path = require('path')

const exec = (command, args) => {
  const scriptPath = path.resolve(__dirname, './script.js')

  const result = spawnSync('node', [scriptPath, command, ...args])

  if (result.status === 0) {
    return result.stdout.toString().trim()
  }

  if (result.status === 1) {
    throw new Error(result.stderr.toString().trim())
  }
}

describe('calculator', function() {
  it('引数は 30 個まで', function() {
    const args = [];
    for (let i = 0; i < 30; i++) {
      args.push('1');
    }

    let result = exec('add', args);
    expect(result).toBe('30');

    args.push('1');
    expect(() => exec('add', args)).toThrow('Error: Please provide between 1 and 30 arguments.');
  });

  it('数字以外の引数を受け取るとエラーになる', function() {
    expect(() => exec('add', ['1', '2', 'a'])).toThrow('Error: a is not a number.');
  });
});