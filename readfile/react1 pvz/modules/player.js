const Player = function(name, position)
{
    this.name = name;
    this.position = position;
    this.timestamp_of_last_input = Date.now();
}

Player.prototype.get_position=function()
{
    return this.position;
}

Player.prototype.set_position=function(arg1)
{
    return this.position = arg1;
}

Player.prototype.go_up = function()
{
    const result1= Date.now()-this.timestamp_of_last_input;
    if(result1 < 125 )
    {
        return;
    };
    this.timestamp_of_last_input = Date.now();
    this.position -= 30;
}

Player.prototype.go_down = function()
{
    
    const result1= Date.now()-this.timestamp_of_last_input;
    if(result1 < 125 )
    {
        return;
    };
    this.timestamp_of_last_input = Date.now();
    this.position += 30;
}

Player.prototype.go_left = function()
{
    const result1= Date.now()-this.timestamp_of_last_input;
    if(result1 < 125 )
    {
        return;
    };
    this.timestamp_of_last_input = Date.now();
    this.position -= 1;
}

Player.prototype.go_right = function()
{
    const result1= Date.now()-this.timestamp_of_last_input;
    if(result1 < 125 )
    {
        return;
    };
    this.timestamp_of_last_input = Date.now();
    this.position += 1;
}

const player1 = new Player("player1", 0);
const player2 = new Player("player2", 699);

export {player1, player2}