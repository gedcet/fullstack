const arr = [];

const Player = function (name, position, direction)
{
    this.name = name;
    this.position = position;
    this.last_position = position;
    this.direction = direction;
    if (this.direction === undefined) this.direction = "right";
}

arr.push(new Player("test", 5, "down"));

Player.prototype.move = function ()
{
    if (this.direction === "left")
    {
        if (this.position < 1)
        {
            return;
        }
        const result1 = this.position % 30;
        if (result1 === 0)
        {
            return;
        }
        this.last_position = this.position;
        this.position -= 1;
    }
    else if (this.direction === "right")
    {
        if (this.position > 898)
        {
            return;
        }
        const result1 = (this.position + 1) % 30;
        if (result1 === 0)
        {
            return;
        }
        this.last_position = this.position;
        this.position += 1;
    }
    else if (this.direction === "up")
    {
        if (this.position < 30)
        {
            return;
        }
        this.last_position = this.position;
        this.position -= 30;
    }
    else if (this.direction === "down")
    {
        if (this.position > 869)
        {
            return;
        }
        this.last_position = this.position;
        this.position += 30;
    }
}
Player.prototype.next_position = function ()
{
    if (this.direction === "left")
    {
        if (this.position < 1)
        {
            return this.position;
        }

        const result1 = this.position % 30;

        if (result1 === 0)
        {
            return this.position;
        }

        return this.position - 1;
    }
    else if (this.direction === "right")
    {
        if (this.position > 898)
        {
            return this.position;
        }
        const result1 = (this.position + 1) % 30;
        if (result1 === 0)
        {
            return this.position;
        }
        return this.position + 1;
    }
    else if (this.direction === "up")
    {
        if (this.position < 30)
        {
            return this.position;
        }
        return this.position - 30;
    }
    else if (this.direction === "down")
    {
        if (this.position > 869)
        {
            return this.position;
        }
        return this.position + 30;
    }
}
Player.prototype.change_direction_left = function ()
{
    this.direction = "left";
}
Player.prototype.change_direction_right = function ()
{
    this.direction = "right";
}
Player.prototype.change_direction_up = function ()
{
    this.direction = "up";
}
Player.prototype.change_direction_down = function ()
{
    this.direction = "down";
}
Player.prototype.inverse_direction = function ()
{
    if (this.direction === "left")
    {
        this.direction = "right";
    }
    else if (this.direction === "right")
    {
        this.direction = "left";
    }
    else if (this.direction === "up")
    {
        this.direction = "down";
    }
    else if (this.direction === "down")
    {
        this.direction = "up";
    }
}
Player.prototype.change_to_last_position = function ()
{
    this.position = this.last_position;
}

const players_handle_change_direction = function (player_name, new_direction)
{
    const result1 = find_player_by_name(player_name);

    if (result1 === null)
    {
        arr.push(new Player(player_name, 0, "right"));
    }
    else if (new_direction === "left")
    {
        result1.change_direction_left();
    }
    else if (new_direction === "right")
    {
        result1.change_direction_right();
    }
    else if (new_direction === "up")
    {
        result1.change_direction_up();
    }
    else if (new_direction === "down")
    {
        result1.change_direction_down();
    }
}

const find_player_by_name = function (name)
{
    for (let player of arr)
    {
        if (player.name === name)
        {
            return player;
        }
    }

    return null;
}

export { players_handle_change_direction, arr, Player }