package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "developer/testutil/keeper"
	"developer/x/developer/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.DeveloperKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
