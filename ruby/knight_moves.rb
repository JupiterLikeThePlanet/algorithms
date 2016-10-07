# How many moves does it take a knight to move to a position
# Knight starts at 0,0 // Board is infinite
# x,y are coordinates


def solution(x, y)
    x = x.abs
    y = y.abs
    if y > x
        temp=y
        y=x
        x=temp
    elsif (x==2 && y==2)
        return 4
    elsif (x==1 && y==0)
        return 3
    end

    if(y == 0 || (y.to_f / x.to_f) <= 0.5)
        xClass = x % 4
        if (xClass == 0)
            initX = x/2
        elsif(xClass == 1)
            initX = 1 + (x/2)
        elsif(xClass == 2)
            initX = 1 + (x/2)
        elsif
            initX = 1 + ((x+1)/2)
        
        elsif (xClass > 1)
            return initX - (y%2)
        else
            return initX + (y%2)
        end
    else
        diagonal = x - ((x-y)/2)
        if((x-y)%2 == 0)
            if (diagonal % 3 == 0)
                return (diagonal/3)*2
            elsif (diagonal % 3 == 1)
                return ((diagonal/3)*2)+2
            else
                return ((diagonal/3)*2)+2
            end
        else
            return ((diagonal/3)*2)+1
        end
    end

  
  
end