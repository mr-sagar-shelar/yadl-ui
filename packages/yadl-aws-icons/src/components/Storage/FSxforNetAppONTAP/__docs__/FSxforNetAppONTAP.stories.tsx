import type { Meta, StoryObj } from "@storybook/react";
import FSxforNetAppONTAP from "../FSxforNetAppONTAP";

const meta: Meta<typeof FSxforNetAppONTAP> = { title: "AWS/Storage/FSxforNetAppONTAP", component: FSxforNetAppONTAP };

export default meta;
type Story = StoryObj<typeof FSxforNetAppONTAP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
