const { toChecksumAddress } = require('ethereum-checksum-address')

export const fn = ({ term, display, actions }) => {
  // Put your plugin code here
  if (term.startsWith('0x') && term.length === 42) {
    const checksumed = toChecksumAddress(term);
    display({
      title: checksumed,
      clipboard: checksumed,
      getPreview: () => `<div style="font-size: 2em;">${checksumed}</div>`,
      onSelect() {
        actions.copyToClipboard(checksumed)
      }
    })
  }
}

export default {
  name: 'Convert address to checksummed',
  fn,
  keyword: 'checksum',
}