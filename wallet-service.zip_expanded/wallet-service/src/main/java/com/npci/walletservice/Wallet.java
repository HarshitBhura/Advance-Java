package com.npci.walletservice;

public class Wallet {
	private String name;
	private double walletbalance;
	private double  totalAmountToSpent;
	private Account account;
	public Wallet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Wallet(String name, double walletbalance, double totalAmountToSpent, Account account) {
		super();
		this.name = name;
		this.walletbalance = walletbalance;
		this.totalAmountToSpent = totalAmountToSpent;
		this.account = account;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getWalletbalance() {
		return walletbalance;
	}
	public void setWalletbalance(double walletbalance) {
		this.walletbalance = walletbalance;
	}
	public double getTotalAmountToSpent() {
		return totalAmountToSpent;
	}
	public void setTotalAmountToSpent(double totalAmountToSpent) {
		this.totalAmountToSpent = totalAmountToSpent;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	
	
}
