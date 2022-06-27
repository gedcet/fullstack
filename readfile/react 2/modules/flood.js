let flood_counter = 0;
const directions = ["left", "right", "up", "down"];

export const flood = function ()
{
    const random_position = Math.round(Math.random() * 899);
    const random_direction = directions[Math.round(Math.random() * 3)];
    const name = flood_counter.toString();
    flood_counter++;

    arr.push(new Player(name, random_position, random_direction));

    setTimeout(flood, 5000);
}