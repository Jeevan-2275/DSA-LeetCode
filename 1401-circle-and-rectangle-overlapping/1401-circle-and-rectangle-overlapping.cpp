class Solution {
public:
    bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {
        int  closeX = std::max(x1,std::min(x2,xCenter));
        int closeY = std::max(y1,std::min(y2,yCenter));

        int distX =  xCenter - closeX;
        int distY = yCenter - closeY;

        return (distX*distX)+(distY*distY) <= (radius*radius);
    }
};