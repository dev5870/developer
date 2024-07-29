package developer_test

import (
	"testing"

	keepertest "developer/testutil/keeper"
	"developer/testutil/nullify"
	"developer/x/developer/module"
	"developer/x/developer/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DeveloperKeeper(t)
	developer.InitGenesis(ctx, k, genesisState)
	got := developer.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
