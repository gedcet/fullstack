const pixels = [];

//

for (let i = 0; i < 900; i++)
{
    pixels.push("off");
}

//
//
//

const get_pixels = function ()
{
    return pixels;
}

//
//
//

const set_pixel = function (index, value)
{
    pixels[index] = value;
}

export { get_pixels, set_pixel };