USE citizenConnect;

CREATE OR ALTER PROCEDURE getVotes

AS
BEGIN 
SELECT * FROM votes
END;

GO;