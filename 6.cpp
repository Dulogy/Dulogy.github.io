#include<iostream>
using namespace std;
int power(int x,int n) {
    return n == 1 ? x : x * power(x, --n);
}
int main() {
    int x, n;
    cout << "enter value of x and n";
    cin >> x >> n;
    int ans = power(x,n);
    cout << ans << endl;
    return 0;
}