package com.npci.walletservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class WalletService {
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private Client accountClient;
	
	@CircuitBreaker(name="getAccount", fallbackMethod = "getAccountDetails2")
	public Wallet getAccountDetails(long accountNumber)
	{
		String url="http://ACCOUNT-SERVICE/account/"+accountNumber;
		
	//	Account account=rest.getForObject(url,Account.class);
		Account account=accountClient.getAccount(accountNumber);
    	Wallet wallet=new Wallet("MyPay",500,(500+account.getBalance()),account);
		return wallet;
	}
	
	public Wallet getAccountDetails2(long accountNumber, Throwable T)
	{
		System.out.println("----------------------- Fallback Method : Alternative Response -----------");
		Wallet wallet=new Wallet("MyPay",500,0,null);
		return wallet;
		
	}

}
