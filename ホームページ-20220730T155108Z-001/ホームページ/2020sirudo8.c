#include <stdio.h>
#include <stdlib.h>

int rc= 0;
int rrr=0;

void reset(void)
{
	int unsigned now;
		now = (unsigned int) time (0);
		srand(now);
}

void RR(void)
{
	int save1;
	int mai = rand() % 4;
	int num1 = rand() % 3;
	int save[4];
	int cheak[2];

	char RRR[100][100]={"マホイップVmax","セキタンザンVmax","トゲキッスVmax"};
	char RR[100][100]={"マホイップV","セキタンザンV","トゲキッスV","ザルードV","デンリュウV","ハガネールV"};

	printf("RRRのカードは\n");
	if(num1 == 0)
	{
		printf("%s\n",RRR[num1]);		
	}
	else if(num1 == 1)
	{
		printf("%s\n",RRR[num1]);
	}
	else
	{
		printf("%s\n",RRR[num1]);
	}
	rc++;
	rrr++;
	
	printf("\n");

	printf("RRのカードは\n");
	printf("%s\n",RR[num1]);

	mai = rand() % 10;

	int num2 = rand() % 6;
	while(num1 == num2){
		num2 = rand() % 6;
	}

	if(mai>=2)
	{
		if(num2 == 0)
		{
			printf("%s\n",RR[num2]);
			
		}
		else if(num2 == 1)
		{
			printf("%s\n",RR[num2]);
		}
		else if(num2 == 2)
		{
			printf("%s\n",RR[num2]);
		}
		else if(num2 == 3)
		{
			printf("%s\n",RR[num2]);
		}
		else if(num2 == 4)
		{
			printf("%s\n",RR[num2]);
		}
		else if(num2 == 5)
		{
			printf("%s\n",RR[num2]);
		}
		rc++;
	}
}


void AR(void)
{
	printf("ARのカードは\n");
	int mai = rand() % 2;
	int num = rand() % 5;
	char AR[100][100] = { "セレビィ","ライコウ","ザシアン","ザマゼンタ","ジラーチ","レックウザ" };
	if (mai = 0) {
		printf("残念.. 引けませんでした...\n");
	}
	else {
		printf("%s\n", AR[num]);
		rc++;
	}
	printf("\n");

}

void SR(void)
{
	char SR[100][100] = {"ザルードV","デンリュウV","マホイップV","マホイップVmax","セキタンザンV","セキタンザンVmax","ハガネールV","トゲキッスV","トゲキッスVmax","オニオン","ポプラ","おとなのおねえさん","英雄のメダル","タフネスマント","ヤレユータン"};
	int num1 = rand() % 15;
	int mai = rand() % 10;

	printf("SR以上のカードは\n");
	if(mai >= 4){
		printf("%s\n",SR[num1]);
		rc++;
	}
	else {
		printf("残念.. 引けませんでした...\n");
		rc--;
	}
	rc++;

	printf("\n");
}

void R(void)
{
	printf("Rのカードは\n");
	char R[100][100] = { "シェイミ","ゲノセクト","ゼクロム","ゼラオラ","ゼルネアス","ディアンシー","レジロック","ジガルデ","ディアルガ","マギアナ","ルギア","トルネロス" };
	int i, n, j;
	int save[10];
	for (i = 0; i < 10 - rc; i++)
	{
		{
			n = rand() % 12;
			save[i] = n;
			if(i > 0){
				for(j = 0;j < i;j++){
					while(save[i] == save[j])
					{
						n = rand() % 12;
						save[i] = n;
					}
				}
			}
			printf("%s\n", R[n]);
		}
	}
	printf("\n");
}

void U(void)
{
	char U[100][100] = { "スピアー","ナッシー","メガヤンマ","ライボルト","デンチュラ","バチンウニ","ピクシー","キリンリキ","ジュペッタ","ヌオー","ルガルガン","フォレトス","メタグロス","ルカリオ","マッギョ","ドデカバシ" };
	int i, c, n, tmp,num;
	int save[16];
	printf("Uのカードは\n");
	num = 20 - rrr;

	for (i = 0; i < 16; i++) {
		n = rand() % 10;
		if (n < 9) {
			save[i] = 1;
		}
		else {
			save[i] = 2;
		}
		
	}
	c = 0;
	for (i = 0;i < 16;i++) {
		c = c + save[i];
	}
	if (c > num) {
		while (c >num) {
			n = rand() % 16;
			if (save[n] > 0) {
				save[n] = save[n] - 1;
				c--;
			}
		}
	}
	else {
		while (c <num) {
			n = rand() % 16;
			if (save[n] < 2) {
				save[n] = save[n] + 1;
				c = c + 1;
			}
		}
	}
	for (i = 0;i < 16;i++) {
		if (save[i] > 0) {
			printf("%s : %d枚\n", U[i], save[i]);
		}
	}
}
void C(void)
{
	char C[100][100] = { "ビードル","コクーン","タマタマ","ヤンヤンマ","クヌギダマ","ダダリン","ラクライ","バチュル","ピッピ","カゲボウズ","デデンネ","ウパー","ツボツボ","リオル","イワンコ","ダンバル","メタング","ペラップ","ツツケラ","ケララッパ" };
	int i, j, n, c, tmp;
	int save1[100], save2[100];

	printf("Cのカードは\n");

	for (i = 0; i < 20; i++) {
		n = rand() % 20;
		if (n < 9) {
			save2[i] = 1;
		}
		else if (n >= 9 && n < 19) {
			save2[i] = 2;
		}
		else  {
			save2[i] = 3;
		}
	}
	c = 0;
	for (i = 0;i < 20;i++) {
		c = c + save2[i];
	}
	if (c > 30) {
		while (c >30) {
			n = rand() % 20;
			if (save2[n] > 0) {
				save2[n] = save2[n] - 1;
				c = c - 1;
			}
		}
	}
	else {
		while (c < 30) {
			n = rand() % 20;
			if (save2[n] < 3) {
				save2[n] = save2[n] + 1;
				c = c + 1;
			}
		}
	}
	
	for (i = 0;i < 20;i++) {
		if (save2[i] > 0) {
			printf("%s : %d枚\n", C[i], save2[i]);
		}
	}


	printf("\n");
}
void TR(void) {
	char TR[100][100] = { "スーパーボール","ポケモンいれかえ","ポケモンキャッチャー","モーモーチーズ","英雄のメダル","ゴツゴツメット","おとなのおねえさん","オニオン","ポプラ","マリィ","アロマ草エネルギー","ストーン闘エネルギー","ツインエネルギー" };
	int i, c, n, tmp;
	int save[13];
	for (i = 0; i < 13; i++) {
		n = rand() % 10;
		if (n < 9) {
			save[i] = 1;
		}
		else {
			save[i] = 2;
		}

	}
	c = 0;
	for (i = 0;i < 13;i++) {
		c = c + save[i];
	}
	if (c > 10) {
		while (c >10) {
			n = rand() % 13;
			if (save[n] > 0) {
				save[n] = save[n] - 1;
				c--;
			}
		}
	}
	for (i = 0;i < 13;i++) {
		if (save[i] > 0) {
			printf("%s : %d枚\n", TR[i], save[i]);
		}
	}
}
	
		

int main(void)
{
	reset();
	SR();
	RR();
	AR();
	R();
	U();
	TR();
	C();
	return 0;
}
