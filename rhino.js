if (common.getlpparam().packageName == 'teavideo.tvplayer.videoallformat') {
  common.hookMethod(
    'com.android.billingclient.api.m$b',
    'b',
    [],
    function (param) {
      param.setResult([{}]);
    }
  );
}
