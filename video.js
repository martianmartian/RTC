        $('#localTag').text("local")
        $('#remoteTag').text("remote")

        var unique;
        $(document).ready(function(){
            $('#nameTheRoom').click(function(){
                unique = $('#roomName').val()

                var webrtc = new SimpleWebRTC({
                localVideoEl: 'localVideo',
                remoteVideosEl: 'remoteVideo',
                autoRequestMedia: true
                //url:"http://localhost:2013"
                });

                webrtc.on('readyToCall', function () {
                    webrtc.joinRoom(unique + 'My room name');
                    //webrtc.joinRoom('My room name');
                });
            })
        })
