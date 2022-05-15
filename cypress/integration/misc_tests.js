it('test 1', ()=>{
    assert.deepEqual({ tea: 'greeen' }, { tea: 'green' });
    assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
})

it('test 2', ()=>{
    assert.equal(3, 3, 'vals equal')
    
})

it('test 3', ()=>{
    assert.notEqual(2, 3, 'Not checking ===');
    
})
