import type { Meta, StoryObj } from "@storybook/react";
import RedHatOpenShiftServiceonAWS from "../RedHatOpenShiftServiceonAWS";

const meta: Meta<typeof RedHatOpenShiftServiceonAWS> = { title: "AWS/Containers/RedHatOpenShiftServiceonAWS", component: RedHatOpenShiftServiceonAWS };

export default meta;
type Story = StoryObj<typeof RedHatOpenShiftServiceonAWS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
