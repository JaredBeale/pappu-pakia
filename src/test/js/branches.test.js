var mit = require("../../../testSetup").mit;

test('getBounds', () => {
  var branch = new mit.Branch();
  branch.w = 10;
  branch.h = 11;
  var b = branch.getBounds();
  expect(b.start_x).toBe(branch.x);
  expect(b.start_y).toBe(branch.y);
  expect(b.end_x).toBe(branch.x+branch.w);
  expect(b.end_y).toBe(branch.y+branch.h);
});

test('getEscapeBounds', () => {
  var branch = new mit.Branch();
  branch.escape_x = 10;
  branch.escape_y = 11;
  branch.escape_w = 12;
  branch.escape_h = 13;
  var b = branch.getEscapeBounds();
  expect(b.start_x).toBe(10);
  expect(b.start_y).toBe(11);
  expect(b.end_x).toBe(22);
  expect(b.end_y).toBe(24);
});

test('BranchUtils_init', () => {
  expect(mit.BranchUtils.count).toBe(4);
  mit.BranchUtils.init();
  expect(mit.BranchUtils.branch_img).toEqual(mit.image.branch);
  expect(mit.BranchUtils.branches.length).toBe(0);
});

test('BranchUtils_getRandomBranchPos', () => {
  var pos = mit.BranchUtils.getRandomBranchPos();
  expect(pos.x).toBeGreaterThanOrEqual(2000);
  expect(pos.x).toBeLessThanOrEqual(2500);
});

test('BranchUtils_create', () => {
  mit.BranchUtils.create();
  expect(mit.BranchUtils.branches.length).toBeGreaterThan(0);
  expect(mit.BranchUtils.branches[0].escape_h).toBe(150);
  expect(mit.BranchUtils.branches[1].escape_h).toBe(150);
  expect(mit.BranchUtils.branches[0].escape_w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[1].escape_w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[0].w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[1].w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[0].h).toBe(mit.image.branch.height);
  expect(mit.BranchUtils.branches[1].h).toBe(mit.image.branch.height);
  expect(mit.BranchUtils.branches[0].y).toBe(0);
  expect(mit.BranchUtils.branches[1].y).toBe(0);
});
