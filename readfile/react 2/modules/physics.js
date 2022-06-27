export const check_for_colision = function (arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            on_colision(arr[i], arr[j]);
        }
    }
}

//
//
//

const on_colision = function (player1, player2)
{
    if (player1.next_position() === player1.position &&   //player1 nejudes
        player2.next_position() !== player2.position)   //player2 judes
    {
        if (player2.next_position() === player1.position)//player2 ivaziuoja i nejudanti player1
        {
            player2.inverse_direction();
        }
    }
    else if (player1.next_position() !== player1.position &&   //player1 judes
        player2.next_position() === player2.position)   //player2 nejudes
    {
        if (player1.next_position() === player2.position)//player1 ivaziuoja i nejudanti player2
        {
            player1.inverse_direction();
        }
    }
    else if (player1.next_position() !== player1.position &&   //player1 judes
        player2.next_position() !== player2.position)   //player2 judes
    {
        const next_p1 = player1.next_position();
        const next_p2 = player2.next_position();

        if (next_p1 === next_p2)//susitiks viename lange
        {
            player1.inverse_direction();
            player2.inverse_direction();
        }
        else if ((next_p1 === player2.position) && (next_p2 === player1.position))//pereis viens i kito langus
        {
            player1.inverse_direction();
            player2.inverse_direction();
        }
    }
}