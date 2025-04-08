import type { Meta, StoryObj } from "@storybook/react";
import DeviceFarm from "../DeviceFarm";

const meta: Meta<typeof DeviceFarm> = { title: "AWS/FrontEndWebMobile/DeviceFarm", component: DeviceFarm };

export default meta;
type Story = StoryObj<typeof DeviceFarm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
