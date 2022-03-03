# ngx-videogular

Updated Videogular for Angular 13+

I will continue to update this and use it in my projects but I do suggest you look at the offical videogular repo now that it is being maintained.

`@videogular/ngx-videogular`




**npm i ngx-videogular@13.2.4**

---

https://stackblitz.com/edit/sliceofbytes-ngx-videogular-demo

You must change **strictTemplates** in your tsconfig to false or update your html templates.


[vgMedia]="media"  -->   [vgMedia]="$any(media)"

From: 
```html
<vg-player>
    <video #media [vgMedia]="media" id="singleVideo" preload="auto" controls>
        <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">
        <source src="http://static.videogular.com/assets/videos/videogular.ogg" type="video/ogg">
        <source src="http://static.videogular.com/assets/videos/videogular.webm" type="video/webm">
    </video>
</vg-player>
```


To: 
```html
<vg-player>
    <video #media [vgMedia]="$any(media)" id="singleVideo" preload="auto" controls>
        <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">
        <source src="http://static.videogular.com/assets/videos/videogular.ogg" type="video/ogg">
        <source src="http://static.videogular.com/assets/videos/videogular.webm" type="video/webm">
    </video>
</vg-player>
```
