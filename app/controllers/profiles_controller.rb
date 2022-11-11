class ProfilesController < ApplicationController
  # Get to /users/:user_id/profile/new
  def new
    # Render blank profile details form
    @profile = Profile.new
  end
  
  def create
    @user = User.find(params[:user_id])
    @profile = @user.build_profile(profile_params)
    if @profile.save
      flash[:success] = "Updated Profile!"
      redirect_to root_url
      
    else
      render action: :new 
    end
      
  end
  
  
  private
    def profile_params
      params.require(:profile).permit(:first_name, :last_name, :job_title, :phone_number, :contact_email, :description)
    end
end