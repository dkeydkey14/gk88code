document.addEventListener('DOMContentLoaded', function () {
    /*
     * File mainv2.js - Được phát triển bởi DKEY
     * Phiên bản: 2.0
     * Mô tả: Xử lý kiểm tra mã code và gọi API tự động
     */

    // Xử lý modal sự kiện
    const eventBtn = document.getElementById('event-btn');
    const eventModal = document.getElementById('event-modal');
    const closeEvent = document.querySelector('.close-event');

    // Hiển thị modal sự kiện tự động khi trang web được tải
    if (eventModal) {
        // Đặt timeout để hiển thị modal sau 500ms (để trang load xong)
        setTimeout(function () {
            document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi mở modal
            eventModal.style.display = 'flex';

            // Thêm hiệu ứng fade-in cho modal
            setTimeout(() => {
                eventModal.style.opacity = '1';
            }, 10);

            // Vô hiệu hóa nút đóng trong 5 giây
            if (closeEvent) {
                closeEvent.style.opacity = '0.3';
                closeEvent.style.cursor = 'not-allowed';
                closeEvent.style.pointerEvents = 'none';

                // Thêm đếm ngược
                const countdownOverlay = document.createElement('div');
                countdownOverlay.className = 'countdown-overlay';

                // Chờ để đảm bảo modal đã hiển thị và các phần tử bên trong đã được render
                setTimeout(() => {
                    // Lấy vị trí của ảnh đầu tiên
                    const firstImage = eventModal.querySelector('.event-images img');
                    if (firstImage) {
                        // Đặt bộ đếm ngược vào container của ảnh
                        const imagesContainer = eventModal.querySelector('.event-images');
                        imagesContainer.appendChild(countdownOverlay);

                        // Định vị tuyệt đối trong container hình ảnh, ở góc trên bên phải của ảnh đầu tiên
                        countdownOverlay.style.position = 'absolute';
                        countdownOverlay.style.top = '30px';
                        countdownOverlay.style.left = '30px';
                        countdownOverlay.style.color = 'white';
                        countdownOverlay.style.fontSize = '18px';
                        countdownOverlay.style.fontWeight = 'bold';
                        countdownOverlay.style.zIndex = '1002';
                        countdownOverlay.style.backgroundColor = 'rgba(255, 99, 71, 0.9)';
                        countdownOverlay.style.width = '30px';
                        countdownOverlay.style.height = '30px';
                        countdownOverlay.style.borderRadius = '50%';
                        countdownOverlay.style.display = 'flex';
                        countdownOverlay.style.justifyContent = 'center';
                        countdownOverlay.style.alignItems = 'center';
                        countdownOverlay.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                        countdownOverlay.textContent = '5';
                    } else {
                        // Fallback nếu không tìm thấy ảnh đầu tiên
                        eventModal.querySelector('.event-modal-content').appendChild(countdownOverlay);
                        countdownOverlay.style.position = 'absolute';
                        countdownOverlay.style.top = '3px';
                        countdownOverlay.style.right = '40px';
                        countdownOverlay.style.zIndex = '1002';
                        countdownOverlay.textContent = '5';
                    }

                    // Đếm ngược
                    let countdown = 5;
                    const countdownInterval = setInterval(function () {
                        countdown--;
                        if (countdown <= 0) {
                            clearInterval(countdownInterval);
                            closeEvent.style.opacity = '1';
                            closeEvent.style.cursor = 'pointer';
                            closeEvent.style.pointerEvents = 'auto';
                            countdownOverlay.remove();
                        } else {
                            countdownOverlay.textContent = countdown;
                        }
                    }, 1000);
                }, 50);
            }
        }, 500);
    }

    if (eventBtn && eventModal) {
        eventBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi mở modal
            eventModal.style.display = 'flex';

            // Thêm hiệu ứng fade-in cho modal
            setTimeout(() => {
                eventModal.style.opacity = '1';
            }, 10);
        });

        if (closeEvent) {
            closeEvent.addEventListener('click', function () {
                closeEventModal();
            });
        }

        // Đóng modal khi nhấp bên ngoài nội dung
        window.addEventListener('click', function (event) {
            if (event.target === eventModal) {
                closeEventModal();
            }
        });

        // Đóng modal khi nhấn phím Escape
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && eventModal.style.display === 'flex') {
                closeEventModal();
            }
        });

        // Thêm xử lý để chuyển hướng khi nhấp vào hình ảnh
        const eventImages = document.querySelectorAll('.event-images img');

        eventImages.forEach(img => {
            img.addEventListener('click', function () {
                // Chuyển hướng đến trang https://www.g0k1o9l41.top/Promotion khi nhấp vào bất kỳ hình ảnh nào
                window.open('https://www.g0k1o9l41.top/Promotion', '_blank');
            });

            // Thêm kiểu con trỏ và hiệu ứng hover để chỉ ra rằng đây là liên kết
            img.style.cursor = 'pointer';
        });
    }

    // Hàm đóng modal sự kiện
    function closeEventModal() {
        if (eventModal) {
            // Kiểm tra xem nút đóng có bị vô hiệu hóa không
            if (closeEvent && closeEvent.style.pointerEvents === 'none') {
                return; // Không cho đóng nếu đang trong thời gian đếm ngược
            }

            eventModal.style.opacity = '0';
            setTimeout(() => {
                eventModal.style.display = 'none';
                document.body.style.overflow = ''; // Cho phép cuộn trang lại
            }, 300);
        }
    }

    // ACCOUNT

    const accountTrigger = document.getElementById('account-trigger');
    const submitAccountBtn = document.querySelector('.btn-submit-account');

    // Xử lý submit form
    if (submitAccountBtn) {
        submitAccountBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const errorMsg = document.querySelector('.error-msg');
            if (!username) {
                errorMsg.textContent = 'Vui lòng nhập tài khoản!';
                document.getElementById('username').focus();
                return;
            }

            errorMsg.textContent = '';

            // Hiệu ứng loading
            submitAccountBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ĐANG XỬ LÝ...';
            submitAccountBtn.disabled = true;

            checkAccount(username).then(result => {
                submitAccountBtn.innerHTML = 'KIỂM TRA NGAY';
                submitAccountBtn.disabled = false;

                const resultHeader = document.querySelector('.result-header');
                if (result.success) {
                    resultHeader.className = 'result-header';

                    const points = parseFloat(result.points) || 0;
                    const reward = Math.floor(points * 1000);

                    resultHeader.classList.add('valid');
                    resultHeader.querySelector('h2').textContent = 'NHẬN MÃ CODE';
                    resultCode.textContent = result.code.toUpperCase();
                    resultStatus.textContent = 'Hợp lệ';
                    resultStatus.className = '';
                    resultStatus.classList.add('status-valid');
                    resultPoints.textContent = `${points} điểm`;
                    resultMoney.textContent = `${reward} đồng`;
                    resultExpire.textContent = 'Trong ngày hôm nay';
                    resultExpire.className = '';
                    resultUsernameRow.style.display = 'none';
                    resultConfirm.style.display = 'none';

                    resultModal.style.display = 'flex';
                } else {
                    const resultHeader = document.querySelector('.result-header');
                    resultHeader.className = 'result-header';
                    resultHeader.classList.add('invalid');

                    resultStatus.textContent = 'Lỗi';
                    resultStatus.className = '';
                    resultStatus.classList.add('status-invalid');
                    resultCode.textContent = '';
                    resultPoints.textContent = '';
                    resultMoney.textContent = '';
                    resultExpire.textContent = '';
                    resultUsernameRow.style.display = 'none';
                    resultConfirm.style.display = 'none';

                    resultHeader.querySelector('h2').textContent = 'LỖI KIỂM TRA TÀI KHOẢN';
                    resultStatus.textContent = result.message;
                    resultCode.textContent = result.code || '';

                    resultModal.style.display = 'flex';
                }

                document.getElementById('username').value = '';

            }).catch(error => {
                console.error('Lỗi khi kiểm tra tài khoản:', error);
                submitAccountBtn.innerHTML = 'KIỂM TRA NGAY';
                submitAccountBtn.disabled = false;
                alert('Có lỗi xảy ra khi kiểm tra tài khoản!');
            });
        });
    }

    const checkAccount = async (username) => {
        try {
            const response = await fetch(`https://api.gkeiirkv.xyz/api/transaction-summary?account=${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });

            const result = await response.json();
            if (result.success) {
                if (result.data.message) {
                    return {
                        success: false,
                        message: result.data.message,
                    }
                }
                const lastFiveTransactions = result.data.newestTransactions?.lastFiveTransactions;
                if (lastFiveTransactions.length > 0) {
                    if (isToday(lastFiveTransactions[0].Time)) {
                        const points = getPoints(lastFiveTransactions[0].Amount);
                        if (points > 0) {
                            const response = await fetch('https://gk88admincode.codes/api/codes/create-external', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    assignedAccount: username.toLowerCase(),
                                    points: points
                                })
                            });

                            const result = await response.json();
                            if (result.success) {
                                return {
                                    success: true,
                                    message: 'Tạo mã code thành công',
                                    code: result.codes[0].code,
                                }
                            } else {
                                return {
                                    success: false,
                                    message: result.message,
                                    code: result.data.lastCreatedCode,
                                }
                            }
                        } else {
                            return {
                                success: false,
                                message: 'Không đủ điểm thưởng'
                            }
                        }
                    } else {
                        return {
                            success: false,
                            message: 'Chưa thực hiện giao dịch trong ngày hôm nay'
                        }
                    }
                } else {
                    return {
                        success: false,
                        message: 'Tài khoản chưa thực hiện giao dịch'
                    }
                }
            } else {
                return {
                    success: false,
                    message: 'Tài khoản không hợp lệ'
                }
            }
        } catch (error) {
            console.error('Lỗi khi kiểm tra tài khoản:', error);
            return {
                success: false,
                message: "Lỗi kết nối tới server. Vui lòng thử lại sau."
            }
        }
        
    }

    function parseFormattedTime(formattedTime) {
        // Xử lý định dạng ISO: '2025-07-30T01:26:08.843'
        if (formattedTime.includes('T')) {
            return new Date(formattedTime);
        } else {
            // Xử lý định dạng cũ: 'HH:MM:SS DD/MM/YYYY'
            const [timeStr, dateStr] = formattedTime.split(' ');
            const [hours, minutes, seconds] = timeStr.split(':').map(Number);
            const [day, month, year] = dateStr.split('/').map(Number);

            return new Date(year, month - 1, day, hours, minutes, seconds);
        }
    }

    function isToday(formattedTime) {
        const date = parseFormattedTime(formattedTime);

        // Lấy thời gian hiện tại và chuyển sang GMT-4
        const now = new Date();
        const gmt4Offset = -4 * 60; // -4 giờ tính bằng phút
        const utcNow = now.getTime() + (now.getTimezoneOffset() * 60000);
        const gmt4Now = new Date(utcNow + (gmt4Offset * 60000));

        // So sánh ngày tháng năm ở múi giờ GMT-4
        const dateString = date.toDateString();
        const nowString = gmt4Now.toDateString();

        return dateString === nowString;
    }

    function getPoints(changeBalance) {
        if (changeBalance < 100) {
            return 0;
        } else if (changeBalance < 500) {
            return 8;
        } else if (changeBalance < 2000) {
            return 18;
        } else if (changeBalance < 5000) {
            return 28;
        } else if (changeBalance < 10000) {
            return 48;
        } else if (changeBalance < 20000) {
            return 78;
        } else if (changeBalance < 30000) {
            return 118;
        } else if (changeBalance < 50000) {
            return 188;
        } else {
            return 388;
        }
    }


    // Thêm hiệu ứng hover cho ảnh
    if (accountTrigger) {
        accountTrigger.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        accountTrigger.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }

    const resultModalHTML = `
    <div id="result-modal" class="result-modal">
        <div class="result-modal-content">
            <span class="close-modal">&times;</span>
            <div class="result-header">
                <img src="images/logogk88.png" alt="GK88 Logo" class="result-logo">
                <h2>KẾT QUẢ KIỂM TRA MÃ CODE</h2>
            </div>
            <div class="result-body">
                <div class="result-info">
                    <table class="result-table">
                        <tr>
                            <td>Mã code:</td>
                            <td id="result-code">GK88</td>
                        </tr>
                        <tr>
                            <td>Trạng thái:</td>
                            <td id="result-status">Hợp lệ</td>
                        </tr>
                        <tr style="display:none;">
                            <td>Điểm thưởng:</td>
                            <td id="result-points">10 điểm</td>
                        </tr>
                        <tr style="display:none;">
                            <td>Quy đổi tiền:</td>
                            <td id="result-money">10.000 đồng</td>
                        </tr>
                        <tr>
                            <td>Hạn sử dụng:</td>
                            <td id="result-expire">12/12/2025</td>
                        </tr>
                        <tr id="result-username-row" style="display:none;">
                            <td>Tên người dùng:</td>
                            <td><input type="text" id="result-username" placeholder="Nhập tên của bạn" class="username-input"></td>
                        </tr>
                    </table>
                </div>
                <div class="result-actions">
                    <button id="result-confirm" class="result-button confirm">XÁC NHẬN NHẬN THƯỞNG</button>
                    <button id="result-cancel" class="result-button cancel">ĐÓNG</button>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', resultModalHTML);

    const resultModal = document.getElementById('result-modal');
    const closeModal = document.querySelector('.close-modal');
    const resultCode = document.getElementById('result-code');
    const resultStatus = document.getElementById('result-status');
    const resultPoints = document.getElementById('result-points');
    const resultMoney = document.getElementById('result-money');
    const resultExpire = document.getElementById('result-expire');
    const resultUsernameRow = document.getElementById('result-username-row');
    const resultUsername = document.getElementById('result-username');
    const resultConfirm = document.getElementById('result-confirm');
    const resultCancel = document.getElementById('result-cancel');

    closeModal.addEventListener('click', function () {
        resultModal.style.display = 'none';
    });

    resultCancel.addEventListener('click', function () {
        resultModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    });

    const submitButton = document.querySelector('.btn-submit');
    if (submitButton) {
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();
            const codeInput = document.getElementById('code');
            if (codeInput && codeInput.value.trim() === '') {
                const resultHeader = document.querySelector('.result-header');
                resultHeader.className = 'result-header';
                resultHeader.classList.add('invalid');

                resultStatus.textContent = 'Lỗi';
                resultStatus.className = '';
                resultStatus.classList.add('status-invalid');
                resultCode.textContent = '';
                resultPoints.textContent = '';
                resultMoney.textContent = '';
                resultExpire.textContent = '';
                resultUsernameRow.style.display = 'none';
                resultConfirm.style.display = 'none';

                resultHeader.querySelector('h2').textContent = 'LỖI KIỂM TRA MÃ';
                resultStatus.textContent = 'Vui lòng nhập mã code';

                resultModal.style.display = 'flex';
                return;
            }

            submitButton.textContent = 'ĐANG XỬ LÝ...';
            submitButton.disabled = true;

            const codeValue = codeInput.value.trim();

            checkCodeValidity(codeValue)
                .then(result => {
                    const resultHeader = document.querySelector('.result-header');
                    resultHeader.className = 'result-header';

                    if (result.success) {
                        const points = parseFloat(result.points) || 0;
                        const reward = Math.floor(points * 1000);

                        resultHeader.classList.add('valid');
                        resultHeader.querySelector('h2').textContent = 'MÃ CODE HỢP LỆ';
                        resultCode.textContent = codeValue.toUpperCase();
                        resultStatus.textContent = 'Hợp lệ';
                        resultStatus.className = '';
                        resultStatus.classList.add('status-valid');
                        resultPoints.textContent = `${points} điểm`;
                        resultMoney.textContent = `${reward} đồng`;
                        resultExpire.textContent = result.expireDate || 'Không giới hạn';
                        resultExpire.className = '';

                        resultUsernameRow.style.display = 'table-row';
                        resultUsername.disabled = false;
                        resultConfirm.style.display = 'inline-block';
                        resultConfirm.textContent = 'XÁC NHẬN NHẬN THƯỞNG';

                        resultModal.style.display = 'flex';


                        resultConfirm.onclick = function () {
                            const userName = resultUsername.value.trim();

                            if (!userName) {
                                const errorMsg = document.createElement('div');
                                errorMsg.style.color = '#E74C3C';
                                errorMsg.style.fontSize = '13px';
                                errorMsg.style.marginTop = '5px';
                                errorMsg.style.fontWeight = 'bold';
                                errorMsg.textContent = 'Vui lòng nhập tên của bạn!';

                                const oldError = resultUsername.parentNode.querySelector('.error-msg');
                                if (oldError) {
                                    oldError.remove();
                                }

                                errorMsg.className = 'error-msg';
                                resultUsername.parentNode.appendChild(errorMsg);

                                resultUsername.focus();

                                resultUsername.style.borderColor = '#E74C3C';
                                resultUsername.style.boxShadow = '0 0 5px rgba(231, 76, 60, 0.5)';

                                return;
                            }

                            resultConfirm.disabled = true;
                            resultConfirm.textContent = 'ĐANG KIỂM TRA...';

                            useCode(codeValue, userName)
                                .then(useResult => {
                                    const resultHeader = document.querySelector('.result-header');
                                    resultHeader.className = 'result-header';

                                    if (!useResult.success) {
                                        // Kiểm tra message về IP đã sử dụng
                                        if (useResult.message && useResult.message.includes('IP này đã sử dụng code trong ngày hôm nay')) {
                                            resultHeader.classList.add('limit-reached');
                                            resultHeader.querySelector('h2').textContent = 'ĐÃ ĐẠT GIỚI HẠN NGÀY';
                                            resultStatus.textContent = 'TÀI KHOẢN HOẶC IP CỦA BẠN ĐÃ ĐƯỢC SỬ DỤNG TRONG NGÀY HÔM NAY';
                                            resultStatus.className = '';
                                            resultStatus.classList.add('status-limit');
                                        } else {
                                            resultHeader.classList.add('invalid');
                                            resultHeader.querySelector('h2').textContent = 'LỖI SỬ DỤNG MÃ';
                                            resultStatus.textContent = useResult.message || 'Không thể sử dụng mã';
                                            resultStatus.className = '';
                                            resultStatus.classList.add('status-invalid');
                                        }
                                        resultConfirm.style.display = 'none';
                                        return;
                                    }

                                    // Hiển thị kết quả thành công
                                    resultHeader.classList.add('used');
                                    resultHeader.querySelector('h2').textContent = 'ĐÃ NHẬN THƯỞNG THÀNH CÔNG';
                                    resultStatus.textContent = 'Đã sử dụng';
                                    resultStatus.className = '';
                                    resultStatus.classList.add('status-used');
                                    resultUsernameRow.style.display = 'table-row';
                                    resultUsername.disabled = true;
                                    resultUsername.value = userName;
                                    resultConfirm.style.display = 'none';
                                    submitButton.textContent = 'KIỂM TRA NGAY';
                                    submitButton.disabled = false;
                                })
                                .catch(error => {
                                    console.error('Lỗi trong quá trình xử lý:', error);

                                    const resultHeader = document.querySelector('.result-header');
                                    resultHeader.className = 'result-header';
                                    resultHeader.classList.add('invalid');
                                    resultHeader.querySelector('h2').textContent = 'LỖI HỆ THỐNG';
                                    resultStatus.textContent = error.message || 'Không thể xử lý yêu cầu';
                                    resultStatus.className = '';
                                    resultStatus.classList.add('status-invalid');
                                    resultConfirm.style.display = 'none';
                                    submitButton.textContent = 'KIỂM TRA NGAY';
                                    submitButton.disabled = false;
                                })
                                .finally(() => {
                                    submitButton.textContent = 'KIỂM TRA NGAY';
                                    submitButton.disabled = false;
                                    codeInput.value = '';

                                    resultConfirm.disabled = false;
                                    resultConfirm.textContent = 'XÁC NHẬN NHẬN THƯỞNG';
                                });
                        };
                    } else if (result.used) {
                        resultHeader.classList.add('used');
                        resultHeader.querySelector('h2').textContent = 'MÃ ĐÃ ĐƯỢC SỬ DỤNG';
                        resultCode.textContent = codeValue.toUpperCase();
                        resultStatus.textContent = 'Đã sử dụng';
                        resultStatus.className = '';
                        resultStatus.classList.add('status-used');
                        resultPoints.textContent = '0 điểm';
                        resultMoney.textContent = '0 đồng';
                        resultExpire.textContent = 'Không áp dụng';
                        resultExpire.className = '';
                        resultUsernameRow.style.display = 'none';
                        resultConfirm.style.display = 'none';

                        resultModal.style.display = 'flex';
                        submitButton.textContent = 'KIỂM TRA NGAY';
                        submitButton.disabled = false;
                        codeInput.value = '';
                    } else {
                        resultHeader.classList.add('invalid');
                        resultHeader.querySelector('h2').textContent = 'MÃ KHÔNG HỢP LỆ';
                        resultCode.textContent = codeValue.toUpperCase();
                        resultStatus.textContent = 'Không hợp lệ';
                        resultStatus.className = '';
                        resultStatus.classList.add('status-invalid');
                        resultPoints.textContent = '0 điểm';
                        resultMoney.textContent = '0 đồng';
                        resultExpire.textContent = 'Không áp dụng';
                        resultExpire.className = '';
                        resultUsernameRow.style.display = 'none';
                        resultConfirm.style.display = 'none';

                        resultModal.style.display = 'flex';
                        submitButton.textContent = 'KIỂM TRA NGAY';
                        submitButton.disabled = false;
                        codeInput.value = '';
                    }
                    submitButton.textContent = 'KIỂM TRA NGAY';
                    submitButton.disabled = false;
                })
                .catch(error => {
                    console.error('Lỗi:', error);

                    const resultHeader = document.querySelector('.result-header');
                    resultHeader.className = 'result-header';
                    resultHeader.classList.add('invalid');
                    resultHeader.querySelector('h2').textContent = 'LỖI HỆ THỐNG';

                    resultCode.textContent = codeValue.toUpperCase();
                    resultStatus.textContent = 'Lỗi khi kiểm tra code';
                    resultStatus.className = '';
                    resultStatus.classList.add('status-invalid');
                    resultPoints.textContent = '';
                    resultMoney.textContent = '';
                    resultExpire.textContent = '';
                    resultUsernameRow.style.display = 'none';
                    resultConfirm.style.display = 'none';

                    resultModal.style.display = 'flex';
                    submitButton.textContent = 'KIỂM TRA NGAY';
                    submitButton.disabled = false;
                });
        });
    }

    async function checkCodeValidity(code) {
        try {
            const response = await fetch('https://gk88admincode.codes/api/codes/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code
                })
            });

            const result = await response.json();

            // Xử lý cả trường hợp response.ok và !response.ok
            if (result.message === "Code đã được sử dụng") {
                return {
                    success: false,
                    message: "Mã đã được sử dụng",
                    used: true
                };
            }

            // Nếu có points và message là "Code hợp lệ" thì code hợp lệ
            if (result.points && result.message === "Code hợp lệ") {
                return {
                    success: true,
                    points: result.points,
                    message: result.message
                };
            }

            return {
                success: false,
                message: "Mã code không hợp lệ"
            };

        } catch (error) {
            console.error('Lỗi gọi API kiểm tra:', error);
            return {
                success: false,
                message: "Lỗi kết nối tới server. Vui lòng thử lại sau."
            };
        }
    }

    async function useCode(code, userName) {
        try {
            const response = await fetch('https://gk88admincode.codes/api/codes/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    account: userName.toLowerCase()
                })
            });

            const result = await response.json();

            // Trả về kết quả trực tiếp từ API, không cần kiểm tra response.ok
            return result;

        } catch (error) {
            console.error('Lỗi gọi API sử dụng:', error);
            return {
                success: false,
                message: "Lỗi kết nối tới server. Vui lòng thử lại sau."
            };
        }
    }

    const links = document.querySelectorAll('.link-detail, .link-code');
    links.forEach(link => {
        const icon = link.querySelector('i');

        link.addEventListener('mouseenter', function () {
            if (icon) {
                icon.style.transform = 'translateX(5px)';
            }
        });

        link.addEventListener('mouseleave', function () {
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });

    const logoContainer = document.querySelector('.logo');
    if (logoContainer) {
        logoContainer.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        logoContainer.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }

    const codeInput = document.getElementById('code');
    if (codeInput) {
        codeInput.addEventListener('focus', function () {
            this.style.boxShadow = '0 0 10px rgba(255, 140, 0, 0.5)';
            this.style.borderColor = '#FF6347';
        });

        codeInput.addEventListener('blur', function () {
            this.style.boxShadow = '';
            this.style.borderColor = '#FF8C00';
        });
    }

    const slogan = document.getElementById("typing-slogan");
    if (!slogan) return;

    const text = slogan.textContent;
    slogan.innerHTML = "";

    let chars = text.split("");

    function startTyping() {
        let index = 0;
        slogan.innerHTML = "";

        let typingInterval = setInterval(function () {
            if (index < chars.length) {
                slogan.innerHTML += `<span class="char" style="opacity: 0;">${chars[index]}</span>`;
                setTimeout(function () {
                    const spans = slogan.querySelectorAll('.char');
                    spans[spans.length - 1].style.opacity = "1";
                }, 20);
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(startTyping, 2000);
            }
        }, 80);
    }

    startTyping();

    resultUsername.addEventListener('input', function () {
        const oldError = this.parentNode.querySelector('.error-msg');
        if (oldError) {
            oldError.remove();
        }
        this.style.borderColor = 'var(--main-color)';
        this.style.boxShadow = '';
    });

    resultUsername.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            resultConfirm.click();
        }
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 85 || e.keyCode === 123)) {
            e.preventDefault();
        }
    });

    (function loadProtection() {
        const protectionScript = document.createElement('script');
        protectionScript.src = 'js/protection.js';
        protectionScript.type = 'text/javascript';
        document.head.appendChild(protectionScript);
    })();
}); 
