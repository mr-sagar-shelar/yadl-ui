import type { Meta, StoryObj } from "@storybook/react";
import RDSonVMware from "../RDSonVMware";

const meta: Meta<typeof RDSonVMware> = { title: "AWS/Database/RDSonVMware", component: RDSonVMware };

export default meta;
type Story = StoryObj<typeof RDSonVMware>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
