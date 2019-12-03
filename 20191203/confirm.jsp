<%@ page contentType = "text/html; charset=utf-8"%>
<%@ page import = "java.sql.DriverManager" %>
<%@ page import = "java.sql.Connection" %>
<%@ page import = "java.sql.PreparedStatement" %>
<%@ page import = "java.sql.SQLException" %>
<%
    //넘겨받은 값을 utf8 기준으로 캐릭터인 코딩을 합니다 글자깨짐방지
    request.setCharacterEncoding("utf-8");
    //넘겨받은 값을 문자열 변수로 각각 저장을 합니다
    String name = request.getParameter("name");
    String email = request.getParameter("email");
    String phone = request.getParameter("phone");
    String msg = request.getParameter("msg");

    //연결초기화
    Connection conn = null;
    PreparedStatement pstmt = null;

    //연결시도
    try{
        String jdbcDriver = "jdbc:mysql://01043573052.iptime.org:3306/test?"+
                            "userUnicode=CharacterEncoading=utf-8";
        String dbuser = "new_stu";
        String dbpass = "00xx";

        conn = DriverManager.getConnection(jdbcDriver, dbuser, dbpass);
        pstmt = conn.PreparedStatement("insert into ljw_table values (?,?,?,?)");
        psrmt.setString(1,name);
        psrmt.setString(2,email);
        psrmt.setString(3,phone);
        psrmt.setString(4,msg);

        pstmt.excuteUpdate();
        

    }finally{
        if(pstmt !=null)try{pstmt.close();}catch(SQLException ex){}
        if(conn !=null)try{conn.close();}catch(SQLException ex){}

    }
%>
<html>
<head>
<title>jsp맛보기</title>
</head>
<body>
글쓰기가 완료되었습니다.
</body>
</html>