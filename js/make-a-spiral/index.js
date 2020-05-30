// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

export const spiralize = size => {
    const board = createEmptyBoard(size);
    const state = {
        position: { x: 0, y: 0 }, // x - increases downwards; y - increases towards right
        direction: 0, // 0 - right; 1 - down; 2 - left; 3 - up
        isFinished: false,
        hasDirectionChangedAtCurrentPosition: false,
    };

    while (!state.isFinished) {
        move(board, state);
    }

    return board;
};

const createEmptyBoard = size =>
    new Array(size).fill().map(() => new Array(size).fill(0));

const move = (board, state) => {
    const nextPosition = getPositionInDirection(state, 1);
    const nextValue = getValueOnPosition(board, nextPosition);

    if (nextValue === undefined) {
        changeDirection(state);
        state.hasDirectionChangedAtCurrentPosition = true;
        return;
    }

    if (nextValue === 1) {
        finish(state);
        return;
    }

    const nnPosition = getPositionInDirection(state, 2);
    const nnValue = getValueOnPosition(board, nnPosition);

    if (nnValue === 1) {
        if (state.hasDirectionChangedAtCurrentPosition) {
            draw(board, state.position);
            finish(state);
        } else {
            changeDirection(state);
            state.hasDirectionChangedAtCurrentPosition = true;
        }
        return;
    }

    draw(board, state.position);
    setPosition(state, nextPosition);
};

const getPositionInDirection = (state, distance) => {
    let { x, y } = state.position;
    switch (state.direction) {
        case 0:
            return { y: y + distance, x };
        case 1:
            return { y, x: x + distance };
        case 2:
            return { y: y - distance, x };
        case 3:
            return { y, x: x - distance };
    }
};

const getValueOnPosition = (board, { x, y }) =>
    board[x] === undefined ? undefined : board[x][y];

const changeDirection = state => {
    state.direction = ++state.direction % 4;
};

const draw = (board, { x, y }) => {
    board[x][y] = 1;
};

const setPosition = (state, newPosition) => {
    state.position.x = newPosition.x;
    state.position.y = newPosition.y;
    state.hasDirectionChangedAtCurrentPosition = false;
};

const finish = state => {
    state.isFinished = true;
};
