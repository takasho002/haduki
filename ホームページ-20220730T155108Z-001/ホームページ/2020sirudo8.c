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

	char RRR[100][100]={"�}�z�C�b�vVmax","�Z�L�^���U��Vmax","�g�Q�L�b�XVmax"};
	char RR[100][100]={"�}�z�C�b�vV","�Z�L�^���U��V","�g�Q�L�b�XV","�U���[�hV","�f�������EV","�n�K�l�[��V"};

	printf("RRR�̃J�[�h��\n");
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

	printf("RR�̃J�[�h��\n");
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
	printf("AR�̃J�[�h��\n");
	int mai = rand() % 2;
	int num = rand() % 5;
	char AR[100][100] = { "�Z���r�B","���C�R�E","�U�V�A��","�U�}�[���^","�W���[�`","���b�N�E�U" };
	if (mai = 0) {
		printf("�c�O.. �����܂���ł���...\n");
	}
	else {
		printf("%s\n", AR[num]);
		rc++;
	}
	printf("\n");

}

void SR(void)
{
	char SR[100][100] = {"�U���[�hV","�f�������EV","�}�z�C�b�vV","�}�z�C�b�vVmax","�Z�L�^���U��V","�Z�L�^���U��Vmax","�n�K�l�[��V","�g�Q�L�b�XV","�g�Q�L�b�XVmax","�I�j�I��","�|�v��","���ƂȂ̂��˂�����","�p�Y�̃��_��","�^�t�l�X�}���g","�������[�^��"};
	int num1 = rand() % 15;
	int mai = rand() % 10;

	printf("SR�ȏ�̃J�[�h��\n");
	if(mai >= 4){
		printf("%s\n",SR[num1]);
		rc++;
	}
	else {
		printf("�c�O.. �����܂���ł���...\n");
		rc--;
	}
	rc++;

	printf("\n");
}

void R(void)
{
	printf("R�̃J�[�h��\n");
	char R[100][100] = { "�V�F�C�~","�Q�m�Z�N�g","�[�N����","�[���I��","�[���l�A�X","�f�B�A���V�[","���W���b�N","�W�K���f","�f�B�A���K","�}�M�A�i","���M�A","�g���l���X" };
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
	char U[100][100] = { "�X�s�A�[","�i�b�V�[","���K�����}","���C�{���g","�f���`����","�o�`���E�j","�s�N�V�[","�L�������L","�W���y�b�^","�k�I�[","���K���K��","�t�H���g�X","���^�O���X","���J���I","�}�b�M��","�h�f�J�o�V" };
	int i, c, n, tmp,num;
	int save[16];
	printf("U�̃J�[�h��\n");
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
			printf("%s : %d��\n", U[i], save[i]);
		}
	}
}
void C(void)
{
	char C[100][100] = { "�r�[�h��","�R�N�[��","�^�}�^�}","���������}","�N�k�M�_�}","�_�_����","���N���C","�o�`����","�s�b�s","�J�Q�{�E�Y","�f�f���l","�E�p�[","�c�{�c�{","���I��","�C�����R","�_���o��","���^���O","�y���b�v","�c�c�P��","�P�����b�p" };
	int i, j, n, c, tmp;
	int save1[100], save2[100];

	printf("C�̃J�[�h��\n");

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
			printf("%s : %d��\n", C[i], save2[i]);
		}
	}


	printf("\n");
}
void TR(void) {
	char TR[100][100] = { "�X�[�p�[�{�[��","�|�P�������ꂩ��","�|�P�����L���b�`���[","���[���[�`�[�Y","�p�Y�̃��_��","�S�c�S�c���b�g","���ƂȂ̂��˂�����","�I�j�I��","�|�v��","�}���B","�A���}���G�l���M�[","�X�g�[�����G�l���M�[","�c�C���G�l���M�[" };
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
			printf("%s : %d��\n", TR[i], save[i]);
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
