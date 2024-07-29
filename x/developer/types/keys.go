package types

const (
	// ModuleName defines the module name
	ModuleName = "developer"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_developer"
)

var (
	ParamsKey = []byte("p_developer")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
