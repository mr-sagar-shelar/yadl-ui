import type { Meta, StoryObj } from "@storybook/react";
import AzureAPIforFHIR from "../AzureAPIforFHIR";

const meta: Meta<typeof AzureAPIforFHIR> = { title: "Azure/Integration/AzureAPIforFHIR", component: AzureAPIforFHIR };

export default meta;
type Story = StoryObj<typeof AzureAPIforFHIR>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
