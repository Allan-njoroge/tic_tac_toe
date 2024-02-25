#include <stdio.h>

int main() {
    int choice;
    float amount, final_amount;
    const float usd = 120.50, euro = 132.40, gbp = 148.20;

    printf("Choose the currency you want to convert");
    printf("\n1. EURO");
    printf("\n2. USD");
    printf("\n3. GBP");

    printf("\n\nChoice: ");
    scanf("%d", &choice);

    printf("\nEnter the amount: ");
    scanf("%f", &amount);

    if(choice == 1) {
        final_amount = amount*euro;
        printf("%f to KES is %f", amount, final_amount);
    } else if(choice == 2) {
        final_amount = amount*usd;
        printf("%f to KES is %f", amount, final_amount);
    } else if(choice == 3) {
        final_amount = amount*gbp;
        printf("%f to KES is %f", amount, final_amount);
    } else {
        printf("\nInvalid input");
    }

    return 0;
}