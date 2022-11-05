if (common.getlpparam().packageName == 'teavideo.tvplayer.videoallformat') {
  common.hookMethod('com.android.billingclient.api.m$b', 'b', [], (param) => {
    param.setResult([{}]);
  });
  common.hookMethod(
    'teavideo.tvplayer.videoallformat.player.PlayerActivity$a',
    'a',
    ['com.android.billingclient.api.h'],
    null,
    null,
    () => null
  );
}
