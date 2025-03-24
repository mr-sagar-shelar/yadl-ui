import type { Meta, StoryObj } from "@storybook/react";
import CleanRooms from "../CleanRooms";

const meta: Meta<typeof CleanRooms> = { title: "AWS/Analytics/CleanRooms", component: CleanRooms };

export default meta;
type Story = StoryObj<typeof CleanRooms>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
